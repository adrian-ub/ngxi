import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ResetDeviceIcon],svg[fluent-mdl2-reset-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 1792v-128h256v128zm-512-640H640V768h128zm-128 128h128v128H640zm640-192q0 119-45 224t-124 183t-183 123t-224 46q-119 0-224-45t-183-124t-123-183t-46-224v-64h128v64q0 93 35 174t96 142t142 96t175 36q93 0 174-35t142-96t96-142t36-175q0-93-35-174t-96-142t-142-96t-175-36H282l147 147l-90 90L37 576l302-301l90 90l-147 147h422q119 0 224 45t183 124t123 183t46 224M1920 0q27 0 50 10t40 27t28 41t10 50v1792q0 27-10 50t-27 40t-41 28t-50 10H896q-27 0-50-10t-40-27t-28-41t-10-50v-99q32-3 64-9t64-14v122h1024V128H896v250q-32-8-64-14t-64-9V128q0-27 10-50t27-40t41-28t50-10z"></svg:path>`,
})
export class FluentMdl2ResetDeviceIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
