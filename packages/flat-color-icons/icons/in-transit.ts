import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsInTransitIcon],svg[flat-color-icons-in-transit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFC107" d="M44 36H30V16c0-1.1.9-2 2-2h8c.6 0 1.2.3 1.6.8l6 7.7c.3.4.4.8.4 1.2V32c0 2.2-1.8 4-4 4"></svg:path><svg:g fill="#9575CD"><svg:path d="M8 36h22V13c0-2.2-1.8-4-4-4H4v23c0 2.2 1.8 4 4 4"></svg:path><svg:path d="M0 9h10v2H0zm0 5h10v2H0zm0 5h10v2H0zm0 5h10v2H0z"></svg:path></svg:g><svg:path fill="#7E57C2" d="M4 11h16v2H4zm0 5h12v2H4zm0 5h8v2H4zm0 5h4v2H4z"></svg:path><svg:g fill="#37474F"><svg:circle cx="39" cy="36" r="5"></svg:circle><svg:circle cx="16" cy="36" r="5"></svg:circle></svg:g><svg:g fill="#78909C"><svg:circle cx="39" cy="36" r="2.5"></svg:circle><svg:circle cx="16" cy="36" r="2.5"></svg:circle></svg:g><svg:path fill="#455A64" d="M44 26h-3.6c-.3 0-.5-.1-.7-.3l-1.4-1.4c-.2-.2-.4-.3-.7-.3H34c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h5.5c.3 0 .6.1.8.4l4.5 5.4c.1.2.2.4.2.6V25c0 .6-.4 1-1 1"></svg:path>`,
})
export class FlatColorIconsInTransitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
