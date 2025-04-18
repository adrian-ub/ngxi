import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeHerokuIcon],svg[material-icon-theme-heroku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7E57C2" d="M28 2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M10 26v-6l4 3Zm14 0h-4v-6.45a2.55 2.55 0 0 0-.95-1.987a2.75 2.75 0 0 0-2.278-.478L10 18.44V6h4v7.56l2.16-.43A6.558 6.558 0 0 1 24 19.55Zm0-16h-4V6h4Z"></svg:path>`,
})
export class MaterialIconThemeHerokuIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
