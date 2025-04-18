import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNutIcon],svg[hugeicons-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.897 6.084c-2.254.706-4.931 2.542-6.033 4.558c-.63.946-1.375 3.134-.38 6.526c.181.785.542 2.485.324 3.018c.53-.22 2.22.143 3 .326c3.372 1 5.547.251 6.488-.382c2.004-1.109 3.829-3.802 4.53-6.07"></svg:path><svg:path d="M22.001 4.914c-.647-.447-2.44-1.033-4.301.434m-1.895-1.26c-2.66-1.427-4.793-1.202-5.964-.718c-.19.079-.361.2-.481.366c-.93 1.288.25 3.233 2.536 6.019c.378.462.801.889 1.26 1.27c2.704 2.253 4.805 3.567 6.099 2.601c.141-.105.248-.25.322-.411c.64-1.39.522-3.684-.78-6.127a7.33 7.33 0 0 0-2.992-3"></svg:path></svg:g>`,
})
export class HugeiconsNutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
