import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCheckboxTreeIcon],svg[game-icons-checkbox-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.28 106.28V250h-77.186v-56.25H22.47v125.656h149.624v-50.719h77.187v148.407h18.69V357.22h71.686v50.718H489.28V282.28H339.657v56.251H267.97V189.407h71.686v50.72H489.28V114.47H339.657v56.248H267.97v-64.44h-18.69zm109.064 26.876h112.25v88.28h-112.25zm-317.188 79.28h112.25v88.283H41.156zm317.188 88.533h112.25v88.28h-112.25z"></svg:path>`,
})
export class GameIconsCheckboxTreeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
