import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUppercaseOutlineRoundedIcon],svg[material-symbols-light-uppercase-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.039 17.577q-.214 0-.357-.143t-.144-.357v-6.546l-1.746 1.746q-.14.14-.344.15t-.364-.15t-.159-.354t.16-.354l2.388-2.388q.243-.242.566-.242t.565.242l2.388 2.388q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16l-1.746-1.746v6.546q0 .214-.143.357t-.356.143m-10.793-2.96l-.915 2.635q-.062.16-.181.242t-.279.083q-.263 0-.41-.215q-.147-.214-.05-.466l3.374-9.219q.061-.16.196-.245q.134-.086.294-.086h.367q.16 0 .295.086t.196.245l3.411 9.225q.098.252-.059.464q-.156.211-.414.211q-.16 0-.291-.095t-.193-.255l-.91-2.61zm.344-.907h3.756L8.49 8.487h-.06z"></svg:path>`,
})
export class MaterialSymbolsLightUppercaseOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
