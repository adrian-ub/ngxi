import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeMugIcon],svg[icomoon-free-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h-3V3.5C12 2.119 9.314 1 6 1S0 2.119 0 3.5v10C0 14.881 2.686 16 6 16s6-1.119 6-2.5V12h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M2.751 4.037c-.578-.19-.928-.394-1.116-.537c.188-.143.538-.347 1.116-.537C3.656 2.665 4.81 2.5 6 2.5s2.344.164 3.249.463c.578.19.928.394 1.116.537c-.188.143-.538.347-1.116.537C8.344 4.335 7.19 4.5 6 4.5s-2.344-.164-3.249-.463M14 10h-2V7h2z"></svg:path>`,
})
export class IcomoonFreeMugIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
