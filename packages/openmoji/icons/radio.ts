import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRadioIcon],svg[openmoji-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M13.223 59.348h45.745V32.776H13.223z"></svg:path><svg:path fill="#9B9B9A" d="m18.74 38.284l36.48.177l.407-2.182H16.624v11.169l2.082.336z"></svg:path><svg:path fill="#d0cfce" d="M59.968 23.793H12.223v2.828l47.745-.015z"></svg:path><svg:circle cx="22.268" cy="13.569" r="1" fill="#d0cfce"></svg:circle><svg:circle cx="22.49" cy="41.984" r="2" fill="#3f3f3f"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m47.434 27.214l7.785 4.214M24.028 14.546l10.637 5.757"></svg:path><svg:circle cx="22.267" cy="13.569" r="2"></svg:circle><svg:path d="M12.223 31.777h47.745v28.571H12.223zm4.323 20.46h38.572m-38.572 4h38.572"></svg:path><svg:path d="M16.624 36.279h38.595v11.504H16.624z"></svg:path><svg:circle cx="22.491" cy="41.985" r="2"></svg:circle><svg:path d="M12.223 26.946v-3.153h47.745v3.153M38.294 41.697v.667m4-.667v.667m4-.667v.667"></svg:path></svg:g>`,
})
export class OpenmojiRadioIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
