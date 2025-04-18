import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderVuexStoreOpenIcon],svg[material-icon-theme-folder-vuex-store-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#41b883" d="m14 29.989l7.2-14.38l1.8 3.508v3.688l-3.577 7.184ZM32 30l-7.2-14.38l-1.8 3.508v3.688L26.566 30Z"></svg:path><svg:path fill="#35495e" d="m14 12l4.5 9l2.7-5.391L19.4 12Zm18 0l-4.5 9l-2.7-5.391L26.6 12Z"></svg:path>`,
})
export class MaterialIconThemeFolderVuexStoreOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
