import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHangUp1SolidIcon],svg[streamline-hang-up-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.459 4.236a3.05 3.05 0 0 1 2.405 2.995l.006.51a1.363 1.363 0 0 1-1.348 1.347h-2.155a1.355 1.355 0 0 1-1.343-1.343a.347.347 0 0 0-.35-.357H5.287a.36.36 0 0 0-.356.358a1.35 1.35 0 0 1-1.343 1.342l-2.155.01A1.363 1.363 0 0 1 .084 7.753l.006-.51a3.05 3.05 0 0 1 2.405-2.995c2.946-.603 6.014-.576 8.964-.011Z"></svg:path>`,
})
export class StreamlineHangUp1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
