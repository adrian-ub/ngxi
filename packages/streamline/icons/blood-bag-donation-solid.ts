import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodBagDonationSolidIcon],svg[streamline-blood-bag-donation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.433 7.806v-.13c.944-.301 2.546-.447 4.568.323c2.001.762 3.595.509 4.545.11a2.16 2.16 0 0 1-1.458 1.75l-.912.303a.72.72 0 0 0-.493.684v.481a.24.24 0 0 1-.24.24H5.556a.24.24 0 0 1-.24-.24v-.48a.72.72 0 0 0-.493-.685l-.912-.304a2.16 2.16 0 0 1-1.48-2.052Zm3.846 5.204h-.721a1.683 1.683 0 0 1-1.683-1.644l-.42-.14A3.61 3.61 0 0 1 .99 7.806V3.635A3.606 3.606 0 0 1 4.596.029h4.808a3.606 3.606 0 0 1 3.606 3.606v4.17c0 1.553-.993 2.93-2.466 3.421l-.42.14a1.683 1.683 0 0 1-1.682 1.644h-.72v.24a.721.721 0 1 1-1.443 0zm.723-10.177l.407-.291a.5.5 0 0 0-.813 0zm0 0l-.406-.291l-.001.001l-.003.004l-.008.011l-.03.043a11 11 0 0 0-.419.648a6 6 0 0 0-.327.617c-.085.19-.18.443-.18.68c0 .368.14.724.395.99c.256.267.608.421.98.421c.37 0 .722-.154.978-.42c.256-.267.396-.623.396-.991c0-.237-.096-.49-.18-.68a6 6 0 0 0-.328-.617A11 11 0 0 0 7.45 2.6l-.03-.043l-.008-.011l-.002-.004h-.001v-.001l-.407.291Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBloodBagDonationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
