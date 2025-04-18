import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BlockedIcon],svg[fluent-mdl2-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 0q141 0 271 36t245 104t207 160t161 208t103 244t37 272q0 141-36 271t-104 245t-160 207t-208 161t-244 103t-272 37q-141 0-271-36t-245-104t-207-160t-161-208t-103-244t-37-272q0-141 36-271t104-245t160-207t208-161T752 37t272-37m0 1920q164 0 313-56t274-163L347 437Q240 561 184 710t-56 314q0 124 32 238t90 214t140 181t181 140t214 91t239 32m677-309q107-124 163-273t56-314q0-124-32-238t-90-214t-140-181t-181-140t-214-91t-239-32q-164 0-313 56T437 347z"></svg:path>`,
})
export class FluentMdl2BlockedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
