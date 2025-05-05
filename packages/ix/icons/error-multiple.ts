import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixErrorMultipleIcon],svg[ix-error-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 266.667c0 30.622 6.792 59.659 18.951 85.685c-25.25-32.504-40.284-73.339-40.284-117.685c0-106.039 85.961-192 192-192c44.346 0 85.181 15.034 117.685 40.284C326.326 70.791 297.289 64 266.667 64C154.737 64 64 154.737 64 266.667m405.333 10.666c0 106.039-85.961 192-192 192s-192-85.961-192-192s85.961-192 192-192s192 85.961 192 192m-341.773 0c0 82.718 67.056 149.773 149.773 149.773c82.718 0 149.773-67.055 149.773-149.773S360.051 127.56 277.333 127.56S127.56 194.616 127.56 277.333m228.855-48.918L326.25 198.25l-48.917 48.917l-48.918-48.917l-30.165 30.165l48.917 48.918l-48.917 48.917l30.165 30.165l48.918-48.917l48.917 48.917l30.165-30.165l-48.917-48.917z" clip-rule="evenodd"></svg:path>`,
})
export class IxErrorMultipleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
