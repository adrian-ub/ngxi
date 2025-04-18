import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUserCheckFilledIcon],svg[ix-user-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 117.333c0-41.237-33.429-74.666-74.667-74.666l-4.096.11c-39.332 2.127-70.57 34.694-70.57 74.556c0 41.238 33.429 74.667 74.666 74.667l4.097-.111c39.332-2.126 70.57-34.693 70.57-74.556m74.573 227.785c-2.421-61.421-51.597-110.451-111.906-110.451H176l-4.617.096C111.668 237.253 64 287.834 64 349.867v76.8h198.826l-40.31-35.272l56.194-64.222l67.167 58.768l16.79-21.818v-14.256zm113.003-22.778l-33.819-26.014l-92.829 120.655l-68.213-59.703l-28.096 32.11l102.435 89.631z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserCheckFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
