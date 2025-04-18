import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteHammerOutlineIcon],svg[flowbite-hammer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="m20.953 11.763l-2.052-2.052l-2.052 2.052l2.052 2.053zm-1.368-2.736L15.48 4.922l-3.42 3.42l4.105 4.105zm-4.105 2.736l-2.736-2.736l-8.21 8.21l2.737 2.736z"></svg:path><svg:path d="m12.93 3.74l1.866 1.867l-2.052 2.052l-1.555-1.555c-.995-.995-3.234-.497-3.918.187l2.737-2.737c.684-.684 1.99-.746 2.923.187Z"></svg:path></svg:g>`,
})
export class FlowbiteHammerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
