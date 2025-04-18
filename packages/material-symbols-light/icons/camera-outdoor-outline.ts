import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraOutdoorOutlineIcon],svg[material-symbols-light-camera-outdoor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.539 17.616q-.262 0-.439-.177T11.923 17v-4q0-.261.177-.438t.439-.177h4q.261 0 .438.177t.177.438v1.462L19 13.489v3.022l-1.846-.972V17q0 .262-.177.439t-.438.177zM5 20V9.5l7-5.27l7 5.27V11h-1v-1l-6-4.5L6 10v9h13v1zm7-7.75"></svg:path>`,
})
export class MaterialSymbolsLightCameraOutdoorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
