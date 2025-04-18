import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHandicappedIcon],svg[mage-handicapped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.572 12.51h2.125a2.36 2.36 0 0 1 1.527.5c.432.345.731.829.848 1.37l.898 4.89c.04.174.04.355 0 .53a1.1 1.1 0 0 1-.24.47a1.1 1.1 0 0 1-.418.32c-.163.076-.34.114-.52.11a1.18 1.18 0 0 1-.758-.25a1.12 1.12 0 0 1-.429-.67l-.698-4.08H15.13"></svg:path><svg:path d="M8.135 10.5c-6.127 1.55-5.269 10.88 1.407 11c4.62.06 6.986-5.41 4.6-8.81"></svg:path><svg:path d="M14.332 8.71V13a5.54 5.54 0 0 0-3.183-2.49v4.56a1.194 1.194 0 0 1-1.188 1.2a1.196 1.196 0 0 1-1.197-1.2l-.599-4.38a2 2 0 0 1 .828-1.88l1.597-1.13c1.247-.96 3.742-.82 3.742 1.03"></svg:path><svg:path d="M13.195 7.06a2.27 2.27 0 0 0 2.102-1.408a2.28 2.28 0 0 0-.494-2.484A2.274 2.274 0 0 0 10.92 4.78c0 .604.24 1.184.667 1.612a2.27 2.27 0 0 0 1.608.668"></svg:path></svg:g>`,
})
export class MageHandicappedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
