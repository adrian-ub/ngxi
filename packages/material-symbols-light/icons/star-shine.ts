import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStarShineIcon],svg[material-symbols-light-star-shine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.896 18.008L18.608 15.7l.688-.688l2.308 2.288zM17.7 6.373l-.688-.688L19.3 3.396l.708.689zm-11.4.02L4.011 4.084l.689-.689l2.308 2.289zM3.085 18.007l-.689-.708l2.289-2.289l.707.689zM6.44 20l1.47-6.275L3 9.481l6.47-.548L12 3l2.55 5.933l6.47.548l-4.912 4.244L17.578 20L12 16.66z"></svg:path>`,
})
export class MaterialSymbolsLightStarShineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
