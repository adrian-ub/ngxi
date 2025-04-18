import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifSbIcon],svg[cif-sb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cifSb0" d="M.5.5h300v150H.5z"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:path fill="#215B33" fill-rule="nonzero" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#0051BA" fill-rule="nonzero" d="M.5 150.5V.5h300"></svg:path><svg:mask id="cifSb1" fill="#fff"><svg:use href="#cifSb0"></svg:use></svg:mask><svg:path stroke="#FCD116" stroke-width="15" d="m300.5.5l-300 150" mask="url(#cifSb1)"></svg:path><svg:path fill="#FFF" fill-rule="nonzero" d="m9.123 15.484l8.816 6.406l-3.367 10.365l8.817-6.406l8.816 6.406l-3.367-10.365l8.817-6.406H26.756L23.389 5.12l-3.368 10.364zm59.223 0l8.817 6.406l-3.368 10.365l8.817-6.406l8.816 6.406l-3.367-10.365l8.817-6.406H85.98L82.612 5.12l-3.368 10.364zM38.734 40.865l8.817 6.405l-3.368 10.365L53 51.229l8.817 6.406l-3.368-10.365l8.817-6.405H56.368L53 30.5l-3.367 10.365zM9.123 66.245l8.816 6.406l-3.367 10.364l8.817-6.405l8.816 6.405l-3.367-10.364l8.817-6.406H26.756L23.389 55.88l-3.368 10.365zm59.223 0l8.817 6.406l-3.368 10.364l8.817-6.405l8.816 6.405l-3.367-10.364l8.817-6.406H85.98L82.612 55.88l-3.368 10.365z"></svg:path></svg:g>`,
})
export class CifSbIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
