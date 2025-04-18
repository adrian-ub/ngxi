import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDownload2OutlineRoundedIcon],svg[material-symbols-light-download-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21q-.213 0-.356-.144T5 20.499t.144-.356T5.5 20h13q.213 0 .356.144t.144.357t-.144.356T18.5 21zm6.48-4.298q-.181 0-.353-.08q-.171-.082-.292-.243l-3.989-5.292q-.298-.404-.077-.851t.723-.447h1.643V3.808q0-.343.232-.576T10.442 3h3.097q.343 0 .575.232t.232.576v5.98h1.643q.502 0 .723.448q.22.447-.077.85l-4.008 5.293q-.121.161-.293.242t-.353.081m0-1.106l3.573-4.788h-2.208V4h-2.711v6.808H8.427zM12 10.808"></svg:path>`,
})
export class MaterialSymbolsLightDownload2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
