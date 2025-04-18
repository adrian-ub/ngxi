import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExploreOffIcon],svg[tdesign-explore-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.472 1.973A11 11 0 0 1 12 1c6.075 0 11 4.925 11 11c0 1.612-.348 3.146-.973 4.528l-.412.912l-1.822-.825l.412-.91A9 9 0 0 0 21 12a9 9 0 0 0-9-9a9 9 0 0 0-3.704.795l-.911.412l-.824-1.822zM3 1.586l7.604 7.603h.001l4.208 4.208v.001l7.6 7.602L21 22.414l-1.961-1.96A10.96 10.96 0 0 1 12 23C5.925 23 1 18.075 1 12c0-2.677.957-5.132 2.547-7.039L1.586 3zm1.968 4.796A8.96 8.96 0 0 0 3 12a9 9 0 0 0 9 9a8.96 8.96 0 0 0 5.618-1.968l-3.591-3.591l-1.55 4.028l-2.1-5.844l-5.845-2.1l4.029-1.55zm12.475.177l-1.937 5.036l-1.867-.718l.322-.836l-.836.321l-.718-1.866z"></svg:path>`,
})
export class TdesignExploreOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
