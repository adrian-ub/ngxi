import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandCodepenIcon],svg[mynaui-brand-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 4l8 5.2M12 4L4 9.2M12 4v5.2m8 0v5.6m0-5.6l-8 5.6m8 0L12 20m8-5.2l-8-5.6M12 20l-8-5.2m8 5.2v-5.2m-8 0V9.2m0 5.6l8-5.6m-8 0l8 5.6"></svg:path>`,
})
export class MynauiBrandCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
