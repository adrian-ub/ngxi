import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAwsElasticCacheIcon],svg[logos-aws-elastic-cache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#99BCE3" d="M.822 207.604L128 307.2l127.179-99.596l-127.183-15.812z"></svg:path><svg:path fill="#19486F" d="M128 0L0 99.591l127.175 15.813L256 99.596z"></svg:path><svg:path fill="#1F5B99" d="M128 0L0 63.591v36.005l128-38.155z"></svg:path><svg:path fill="#1F5B99" d="M0 243.609l128 63.59v-61.441L0 207.608z"></svg:path><svg:path fill="#1F5B99" d="M128 200.054l-55.467-8.125v-76.037l55.467-8l1.309 2.532l-.138 87.099z"></svg:path><svg:path fill="#5294CF" d="M128 0v61.441l128 38.155V63.591z"></svg:path><svg:path fill="#5294CF" d="M128 245.758V307.2l128-63.591v-36z"></svg:path><svg:path fill="#5294CF" d="M128 200.054l55.467-8.125v-76.037l-55.467-8z"></svg:path>`,
})
export class LogosAwsElasticCacheIcon {
  readonly viewBox = input("0 0 256 308")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
