import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainSurrealdbIcon],svg[devicon-plain-surrealdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 33.675l30.475 16.877v-6.766L64 26.948L33.525 43.786l67.05 37.045v6.74L64 107.78L27.425 87.572V67.364L64 87.57l6.1-3.37l-48.775-26.935v33.689L64 114.519l42.662-23.577V77.474l-60.95-33.688Zm-42.675 3.37v13.481l60.95 33.688l-18.288 10.11l-30.475-16.876v6.766l30.475 16.838l30.475-16.838l-67.037-37.058v-6.74L64 20.208l36.575 20.208v20.207L64 40.416l-6.1 3.37l48.762 26.948V37.045L64 13.467zM64 0L9.137 30.318v67.364L64 128l54.863-30.305V30.318Zm48.75 94.312L64 121.26L15.237 94.312V33.688L64 6.74l48.763 26.948Z"></svg:path>`,
})
export class DeviconPlainSurrealdbIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
