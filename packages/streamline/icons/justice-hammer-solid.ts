import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineJusticeHammerSolidIcon],svg[streamline-justice-hammer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.877 6.266a1.5 1.5 0 0 1 0-2.122L7.462.56a1.5 1.5 0 0 1 2.122 0l1.583 1.584a1.5 1.5 0 0 1 0 2.121L9.91 5.521L13.7 9.31a.75.75 0 1 1-1.062 1.06L8.85 6.583L7.582 7.85a1.5 1.5 0 0 1-2.12 0zM1.331 12.38h-.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-.5v-1.75a.5.5 0 0 0-.5-.5h-5.5a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineJusticeHammerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
