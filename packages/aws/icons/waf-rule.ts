import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsWafRuleIcon],svg[aws-waf-rule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD344C" fill-rule="evenodd" d="M2,2 L2,16 L2,17 L2,30 L2,31 L2,46 L46,46 L46,2 L2,2 Z M4,16.001 L44.001,16.001 L44.001,4 L4,4 L4,16.001 Z M4,30 L44.001,30 L44.001,18 L4,18 L4,30 Z M4,44.001 L44.001,44.001 L44.001,32 L4,32 L4,44.001 Z M35.151,11.008 L32.578,9.184 L31.422,10.816 L35.371,13.617 L40.707,8.28 L39.293,6.866 L35.151,11.008 Z M35.151,25.008 L32.578,23.184 L31.422,24.816 L35.371,27.617 L40.707,22.281 L39.293,20.867 L35.151,25.008 Z M36,36.646 L33.647,34.293 L32.233,35.707 L34.586,38.06 L32.233,40.414 L33.647,41.829 L36,39.475 L38.354,41.829 L39.768,40.414 L37.414,38.06 L39.768,35.707 L38.354,34.293 L36,36.646 Z"></svg:path>`,
})
export class AwsWafRuleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
