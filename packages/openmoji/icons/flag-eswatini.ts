import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagEswatiniIcon],svg[openmoji-flag-eswatini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" stroke="#f1b31c" stroke-miterlimit="10" d="M5 48h62v7H5zm0-31h62v7H5z"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width=".968" d="M19.362 28.927h36.801m-40.147 4.182h36.801"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width=".925" d="M11.676 36.478h48.827"></svg:path><svg:path d="M48.648 32.309a17.847 17.847 0 0 0-25.239 0l-3.955 3.954a.304.304 0 0 0 0 .43l3.955 3.954a17.847 17.847 0 0 0 25.239 0l3.955-3.954a.304.304 0 0 0 0-.43Z"></svg:path><svg:path fill="#fff" d="M36.09 45.69a.31.31 0 0 0 .312.31a17.48 17.48 0 0 0 12.153-5.138l4.17-4.169a.304.304 0 0 0 0-.43l-4.17-4.168a17.48 17.48 0 0 0-12.153-5.138a.31.31 0 0 0-.312.31Z"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.936" d="M23.89 34.3h9.68m-9.68 4.356h9.68"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.936" d="M38.411 34.3h9.68m-9.68 4.356h9.68"></svg:path><svg:circle cx="31.119" cy="30.645" r="2.904" fill="#1e50a0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".968"></svg:circle><svg:circle cx="12.766" cy="38.292" r="2.904" fill="#1e50a0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".968"></svg:circle><svg:circle cx="60.178" cy="38.292" r="2.904" fill="#1e50a0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".968"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagEswatiniIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
