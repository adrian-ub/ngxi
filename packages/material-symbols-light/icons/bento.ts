import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBentoIcon],svg[material-symbols-light-bento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.308 11.5V5.885H19.5q.69 0 1.153.462t.463 1.153v4zM4.5 18.116q-.69 0-1.153-.463T2.885 16.5v-9q0-.69.462-1.153T4.5 5.884h8.808v12.232zm3.596-5.077q.433 0 .736-.304q.302-.302.302-.735t-.302-.736q-.303-.303-.736-.303t-.736.303q-.302.303-.302.736t.302.735t.736.303m6.212 5.078V12.5h6.808v4q0 .69-.463 1.153t-1.153.463z"></svg:path>`,
})
export class MaterialSymbolsLightBentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
