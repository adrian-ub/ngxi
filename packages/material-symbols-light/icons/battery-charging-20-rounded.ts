import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryCharging20RoundedIcon],svg[material-symbols-light-battery-charging-20-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.692 21q-.343 0-.575-.232t-.233-.576V5.288q0-.343.233-.575t.575-.232h1.616v-.673q0-.344.232-.576T11.116 3h1.769q.343 0 .575.232t.232.576v.673h1.62q.344 0 .574.232t.23.575v6.27q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356V5.462H8.885v12.48h1.532q.287 0 .474.194q.186.193.217.485q.056.377.142.734q.086.356.22.695q.142.348-.049.649q-.19.301-.538.301zm7.885-2.154h-.858q-.223 0-.341-.195t-.001-.407l1.676-3.021q.083-.127.227-.096t.143.197v1.83h.858q.223 0 .341.195t.001.407l-1.676 3.021q-.084.127-.227.096t-.143-.197z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryCharging20RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
