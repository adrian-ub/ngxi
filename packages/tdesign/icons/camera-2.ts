import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCamera2Icon],svg[tdesign-camera-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a7 7 0 1 0 0 14a7 7 0 0 0 0-14m-9 7a9 9 0 1 1 10 8.945v1.506a9.94 9.94 0 0 0 4.75-1.769l.818-.575l1.151 1.635l-.817.576A11.95 11.95 0 0 1 12 23a11.95 11.95 0 0 1-6.902-2.182l-.818-.576l1.152-1.635l.818.575A9.94 9.94 0 0 0 11 20.951v-1.506A9 9 0 0 1 3 10.5m9-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path>`,
})
export class TdesignCamera2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
