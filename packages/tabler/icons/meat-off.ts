import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMeatOffIcon],svg[tabler-meat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13.62 8.382l1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821m-9.863 8.361c2.733 2.734 5.9 4 7.07 2.829c1.172-1.172-.094-4.338-2.828-7.071c-2.733-2.734-5.9-4-7.07-2.829c-1.172 1.172.094 4.338 2.828 7.071M7.5 16l1 1"></svg:path><svg:path d="M12.975 21.425c1.582-1.582 2.679-3.407 3.242-5.2M16.6 12.6c-.16-1.238-.653-2.345-1.504-3.195c-.85-.85-1.955-1.344-3.192-1.503m-3.63.382c-1.792.563-3.616 1.66-5.198 3.242M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerMeatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
