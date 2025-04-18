import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellPinDuotoneLineIcon],svg[lets-icons-bell-pin-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M12 2a6 6 0 0 0-6 6v2a7 7 0 0 1-1.4 4.2l-.214.286l-.015.019a3 3 0 0 0-.138.193a1.5 1.5 0 0 0 1.149 2.297q.09.006.237.005h12.762q.147.001.238-.005a1.5 1.5 0 0 0 1.148-2.297q-.05-.076-.138-.193l-.015-.02l-.214-.285A7 7 0 0 1 18 10v-.683c0-.164 0-.246-.047-.29c-.047-.045-.137-.04-.317-.03a3 3 0 0 1-.272 0c-.18-.01-.27-.015-.317.03c-.047.044-.047.126-.047.29V10a8 8 0 0 0 1.6 4.8l.214.286l.082.109l.02.028l.005.007v.001l.002.002a.5.5 0 0 1-.386.766h-.044l-.136.001H5.507l-.035-.001H5.46a.5.5 0 0 1-.383-.767l.001-.002l.005-.007l.02-.028l.082-.11l.214-.285A8 8 0 0 0 7 10V8a5 5 0 0 1 8.545-3.526c.105.105.157.158.213.162s.118-.043.242-.136q.112-.084.234-.156c.177-.104.265-.156.275-.228s-.052-.137-.177-.267A5.98 5.98 0 0 0 12 2" clip-rule="evenodd"></svg:path><svg:circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M9.585 18.647a2.5 2.5 0 0 0 4.83 0"></svg:path></svg:g>`,
})
export class LetsIconsBellPinDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
