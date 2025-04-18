import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ShapesIcon],svg[fluent-mdl2-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1280h-419l370 640H595l267-463q-66 38-138 58t-148 21q-119 0-224-45t-183-124t-123-183T0 960q0-119 45-224t124-183t183-123t224-46q85 0 166 24t154 73V128h1152zM576 1408q93 0 174-35t142-97t96-142t36-174q0-92-35-173t-96-143t-142-96t-175-36q-93 0-174 35t-142 96t-96 142t-36 175q0 93 35 174t96 142t142 96t175 36m1201 384q-121-209-240-416t-240-416q-121 209-240 416t-240 416zm143-1536h-896v347q61 75 94 165t34 188l145-252l258 448h365z"></svg:path>`,
})
export class FluentMdl2ShapesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
