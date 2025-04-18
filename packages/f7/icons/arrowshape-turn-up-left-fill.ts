import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowshapeTurnUpLeftFillIcon],svg[f7-arrowshape-turn-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.656 49.504c1.57 0 2.742-1.172 2.742-2.742v-8.953h.68c9.07 0 14.813 2.297 18.89 9.96c.821 1.5 1.9 1.735 2.884 1.735c1.265 0 2.414-1.125 2.414-3.14c0-17.321-7.336-28.126-24.188-28.126h-.68v-8.86c0-1.57-1.171-2.882-2.788-2.882c-1.172 0-1.876.586-3.188 1.688L3.93 25.48c-.867.867-1.195 1.734-1.195 2.53c0 .774.328 1.641 1.195 2.509l18.492 17.46c1.172 1.008 2.062 1.524 3.234 1.524"></svg:path>`,
})
export class F7ArrowshapeTurnUpLeftFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
