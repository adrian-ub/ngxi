import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFootballOutlineIcon],svg[famicons-football-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 175.15l-76.09 63.83L200 320h112l20.09-81.02zm76.09 63.83l52.87-22.4l25.78-73.26M447 269.97l-62.04-53.39m-205.05 22.4l-52.87-22.4l-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64m-128-.01l64 42.65M312 320l28 48l-28 71m98.74-71H342m-142-48l-28 48l28.37 71.5M101.63 368H172"></svg:path>`,
})
export class FamiconsFootballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
