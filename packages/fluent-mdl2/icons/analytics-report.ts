import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AnalyticsReportIcon],svg[fluent-mdl2-analytics-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1024q0 149 46 285t131 250t203 197t260 126v132q-169-44-310-138t-243-226t-158-291t-57-335q0-141 36-272t104-244t160-207t207-161T752 37t272-37q135 0 260 33t236 95t203 149t161 193t110 230t51 257l-154-154q-38-148-120-272t-198-214t-255-139t-294-50q-124 0-238 32t-213 90t-182 141t-140 181t-91 214t-32 238m896-512q-106 0-199 40T663 662T553 825t-41 199q0 103 38 196t112 166l-91 91q-91-91-139-208t-48-245q0-88 23-170t64-153t100-129t130-100t153-65t170-23q75 0 147 17t137 51t123 80t102 108h-174q-70-62-155-95t-180-33m603 256l421 421v859H896V768zm37 219v165h165zm256 933v-640h-384V896h-512v1024zm-128-512v384h-128v-384zm-640 384v-512h128v512zm256 0v-256h128v256z"></svg:path>`,
})
export class FluentMdl2AnalyticsReportIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
