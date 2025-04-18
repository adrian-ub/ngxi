import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCakeLayeredIcon],svg[mdi-cake-layered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21v-4a2 2 0 0 0-2-2h-1v-3a2 2 0 0 0-2-2h-3V8h-2v2H8c-1.11 0-2 .89-2 2v3H5c-1.11 0-2 .89-2 2v4H1v2h22v-2M12 7a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L12 1l-1.72 2.97c-.18.3-.28.65-.28 1.03a2 2 0 0 0 2 2"></svg:path>`,
})
export class MdiCakeLayeredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
