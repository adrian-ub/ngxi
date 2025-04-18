import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAwsElbIcon],svg[logos-aws-elb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosAwsElb0" x1="0%" x2="100%" y1="100%" y2="0%"><svg:stop offset="0%" stop-color="#4D27A8"></svg:stop><svg:stop offset="100%" stop-color="#A166FF"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosAwsElb0)" d="M0 0h256v256H0z"></svg:path><svg:path fill="#FFF" d="M96 169.6c-22.938 0-41.6-18.662-41.6-41.6S73.062 86.4 96 86.4s41.6 18.662 41.6 41.6s-18.662 41.6-41.6 41.6m96 19.2c0 7.06-5.74 12.8-12.8 12.8s-12.8-5.74-12.8-12.8s5.74-12.8 12.8-12.8s12.8 5.74 12.8 12.8M179.2 54.4c7.06 0 12.8 5.74 12.8 12.8S186.26 80 179.2 80s-12.8-5.74-12.8-12.8s5.74-12.8 12.8-12.8m9.6 60.8c7.06 0 12.8 5.74 12.8 12.8s-5.74 12.8-12.8 12.8S176 135.06 176 128s5.74-12.8 12.8-12.8m-44.963 16h26.051c1.53 9.066 9.418 16 18.912 16c10.589 0 19.2-8.611 19.2-19.2s-8.611-19.2-19.2-19.2c-9.494 0-17.382 6.934-18.912 16h-26.051a47.5 47.5 0 0 0-4.407-17.107l28.397-25.06c3.187 2.356 7.114 3.767 11.373 3.767c10.589 0 19.2-8.611 19.2-19.2S189.789 48 179.2 48S160 56.611 160 67.2c0 4.02 1.245 7.747 3.363 10.835L136.26 101.95C127.693 88.762 112.867 80 96 80c-26.467 0-48 21.533-48 48s21.533 48 48 48c16.867 0 31.693-8.762 40.26-21.949l27.103 23.914A19.1 19.1 0 0 0 160 188.8c0 10.589 8.611 19.2 19.2 19.2s19.2-8.611 19.2-19.2s-8.611-19.2-19.2-19.2c-4.26 0-8.186 1.411-11.373 3.766l-28.397-25.059a47.5 47.5 0 0 0 4.407-17.107"></svg:path>`,
})
export class LogosAwsElbIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
