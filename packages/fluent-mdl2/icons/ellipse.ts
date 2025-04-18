import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EllipseIcon],svg[fluent-mdl2-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 256q131 0 268 27t264 85t233 144t175 206q41 71 62 147t22 159q0 82-21 158t-63 148q-68 119-174 206t-233 144t-264 84t-269 28q-131 0-268-27t-264-85t-233-144t-175-206q-41-71-62-147T0 1024q0-82 21-158t63-148q68-119 174-206t233-144t264-84t269-28m0 1408q84 0 169-11t167-36t159-60t146-87q54-40 101-88t81-105t53-120t20-133q0-70-19-133t-54-119t-81-105t-101-89q-68-50-145-86t-160-61t-167-35t-169-12q-84 0-169 11t-167 36t-159 60t-146 87q-54 40-101 88t-81 105t-53 120t-20 133q0 70 19 133t54 119t81 105t101 89q68 50 145 86t160 61t167 35t169 12"></svg:path>`,
})
export class FluentMdl2EllipseIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
