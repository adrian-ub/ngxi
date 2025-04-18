import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAlienSolidIcon],svg[streamline-alien-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0C5.152 0 3.413.361 2.122 1.24C.803 2.14 0 3.548 0 5.5c0 1.92.783 4.023 2.021 5.65C3.256 12.77 5.011 14 7 14s3.744-1.23 4.979-2.85C13.217 9.522 14 7.42 14 5.5c0-1.953-.803-3.361-2.122-4.26C10.587.362 8.848 0 7 0M2.52 4.169a3.26 3.26 0 0 1 2.552.512a.3.3 0 0 1 .062.062a3.26 3.26 0 0 1 .512 2.551a.25.25 0 0 1-.192.192a3.26 3.26 0 0 1-2.55-.512a.3.3 0 0 1-.063-.063a3.26 3.26 0 0 1-.512-2.55a.25.25 0 0 1 .192-.192Zm7.63-.01a3.3 3.3 0 0 1 1.33.01a.25.25 0 0 1 .191.192a3.26 3.26 0 0 1-.512 2.55a.3.3 0 0 1-.063.063a3.26 3.26 0 0 1-2.55.512a.25.25 0 0 1-.192-.192a3.26 3.26 0 0 1 .512-2.55a.3.3 0 0 1 .062-.063a3.3 3.3 0 0 1 1.222-.521Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlienSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
