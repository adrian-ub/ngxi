import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterOutlineIcon],svg[healthicons-running-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 12V6H6v36h2V22h3v2h14v-3.333h3a2 2 0 0 1 2 2V23h-2v8h14v-8h-2v-1c0-5.523-4.477-10-10-10h-5v-2h-6V8h7a1 1 0 1 0 0-2H10a1 1 0 1 0 0 2h7v2h-6v2zm30 10a8 8 0 0 0-8-8h-5v4.667h3a4 4 0 0 1 4 4V23h6zm2 3H30v4h10zM23 12H13v10h10zm-12 8H8v-6h3z"></svg:path><svg:path d="M35.5 42c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42m0-2c.757 0 1.5-.66 1.5-1.636c0-.932-.552-2.087-1.363-3.193l-.137-.183q-.07.09-.137.183c-.81 1.105-1.363 2.26-1.363 3.193c0 .976.743 1.636 1.5 1.636"></svg:path></svg:g>`,
})
export class HealthiconsRunningWaterOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
