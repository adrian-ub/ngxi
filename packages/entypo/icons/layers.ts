import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoLayersIcon],svg[entypo-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.248 11.601c.45.313 1.05.313 1.5 0l9.088-5.281a.375.375 0 0 0-.048-.646l-9.205-3.537a1.32 1.32 0 0 0-1.17 0L.208 5.674a.375.375 0 0 0-.048.646zm10.54-.79l-2.486-1.233l-5.725 3.327c-.469.309-1.014.471-1.579.471s-1.11-.163-1.579-.471L2.698 9.576L.208 10.81a.375.375 0 0 0-.048.646l9.088 6.309c.45.313 1.05.313 1.5 0l9.088-6.309a.374.374 0 0 0-.048-.645"></svg:path>`,
})
export class EntypoLayersIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
