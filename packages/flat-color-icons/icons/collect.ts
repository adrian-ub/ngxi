import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCollectIcon],svg[flat-color-icons-collect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#009688"><svg:path d="M22 35h4v11h-4z"></svg:path><svg:path d="m24 29.6l7 8.4H17z"></svg:path></svg:g><svg:g fill="#009688"><svg:path d="M22 2h4v11h-4z"></svg:path><svg:path d="M24 18.4L17 10h14z"></svg:path></svg:g><svg:g fill="#009688"><svg:path d="M2 22h11v4H2z"></svg:path><svg:path d="M18.4 24L10 31V17z"></svg:path></svg:g><svg:g fill="#009688"><svg:path d="M35 22h11v4H35z"></svg:path><svg:path d="m29.6 24l8.4-7v14z"></svg:path></svg:g><svg:circle cx="24" cy="24" r="3" fill="#F44336"></svg:circle>`,
})
export class FlatColorIconsCollectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
