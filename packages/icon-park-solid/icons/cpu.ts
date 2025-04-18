import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCpuIcon],svg[icon-park-solid-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCpu0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M38 8H10a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M30 18H18v12h12z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M14.91 2v6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.91 2v6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M14.91 40v6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.91 40v6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 2v6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 2v6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 40v6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40v6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M33.09 2v6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.09 2v6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M33.09 40v6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.09 40v6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M2 14.91h6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 14.91h6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M40 14.91h6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 14.91h6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M2 24h6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 24h6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M40 24h6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 24h6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M2 33.09h6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 33.09h6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M40 33.09h6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 33.09h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCpu0)"></svg:path>`,
})
export class IconParkSolidCpuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
