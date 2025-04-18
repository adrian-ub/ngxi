import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenIndentIncreaseFill12Icon],svg[garden-indent-increase-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 1H2m8 3H6m4 3H6m4 3H2"></svg:path><svg:path fill="currentColor" d="M1.5 8c-.06 0-.13-.01-.19-.04A.5.5 0 0 1 1 7.5v-4c0-.2.12-.38.31-.46s.4-.04.54.11L3.5 4.79c.39.39.39 1.02 0 1.41L1.85 7.85A.47.47 0 0 1 1.5 8"></svg:path>`,
})
export class GardenIndentIncreaseFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
