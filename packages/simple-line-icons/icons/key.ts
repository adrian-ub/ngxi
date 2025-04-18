import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsKeyIcon],svg[simple-line-icons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M655.696 0C496.64 0 367.693 129.154 367.693 288.467c0 71.408 26.032 136.624 68.944 187.008c-8.832-.544-17.84 2.432-24.591 9.184L89.662 809.043c-12.481 12.496-12.481 32.768 0 45.249c.24.24.512.383.768.624c.08.08.128.175.208.255l156.912 159.904c12.48 12.497 32.753 12.497 45.25 0s12.495-32.768 0-45.249L157.326 831.762l82.496-83.007l135.728 138.32c12.48 12.496 32.753 12.496 45.25 0s12.48-32.769 0-45.25L284.943 703.379l172.384-173.472c6.672-6.672 9.664-15.536 9.216-24.273c50.624 44.288 116.672 71.313 189.168 71.313c159.056 0 288-129.152 288-288.48C943.696 129.154 814.769 0 655.696 0m-.003 512.002c-123.248 0-224-100.272-224-224c0-123.744 100.752-224 224-224s224 100.256 224 224c0 123.728-100.736 224-224 224"></svg:path>`,
})
export class SimpleLineIconsKeyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
