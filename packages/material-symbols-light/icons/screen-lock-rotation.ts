import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenLockRotationIcon],svg[material-symbols-light-screen-lock-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.923 22.104q-2.263 0-4.268-.863q-2.005-.864-3.505-2.364t-2.363-3.505t-.864-4.268h1q0 1.992.747 3.771t2.044 3.127t3.04 2.164t3.713.898l-3.451-3.452l.707-.708l5.016 5.015q-.502.093-.941.139t-.875.046M15.889 9q-.35 0-.62-.27T15 8.112V5.35q0-.35.27-.62t.619-.268h.13v-1q0-.748.51-1.259q.512-.51 1.26-.51t1.258.51t.51 1.259v1h.132q.35 0 .6.269t.25.619v2.762q0 .35-.27.619T19.65 9zm.9-4.538h2v-1q0-.426-.288-.713t-.713-.288t-.712.288t-.288.713zm-3.043 12.9l-7.119-7.12q-.46-.46-.46-1.138q0-.679.46-1.138l3.158-3.158q.46-.46 1.138-.46q.679 0 1.139.46l.554.553v2.75q0 1.373.95 2.323t2.322.95h2.745l.548.543q.46.46.46 1.139q0 .678-.46 1.138l-3.158 3.158q-.46.46-1.138.46q-.68 0-1.139-.46"></svg:path>`,
})
export class MaterialSymbolsLightScreenLockRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
