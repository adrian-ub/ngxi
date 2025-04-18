import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVolumeMuteOutlineRoundedIcon],svg[material-symbols-light-volume-mute-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.423 14H8.808q-.343 0-.576-.232T8 13.192v-2.384q0-.343.232-.576T8.808 10h2.615l2.685-2.685q.244-.244.568-.112t.324.472v8.65q0 .34-.324.472t-.568-.112zM9 13h2.85L14 15.15v-6.3L11.85 11H9zm2.5-1"></svg:path>`,
})
export class MaterialSymbolsLightVolumeMuteOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
