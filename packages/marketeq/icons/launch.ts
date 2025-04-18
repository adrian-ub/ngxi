import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLaunchIcon],svg[marketeq-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 43.75h-8.333l1.687-6.77a4.17 4.17 0 0 1 1.73-2.46L17 32.438m16-.021l3.167 2.083a4.17 4.17 0 0 1 1.729 2.458l1.687 6.792H31.25M25 20.833v6.25"></svg:path><svg:path stroke="#306CFE" d="M31.25 43.75h-12.5l-2.562-16.667a20.83 20.83 0 0 1 5.854-17.896l1.479-1.479a2.083 2.083 0 0 1 2.958 0l1.48 1.48a20.83 20.83 0 0 1 5.854 17.895z"></svg:path></svg:g>`,
})
export class MarketeqLaunchIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
