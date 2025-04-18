import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationSocialBingIcon],svg[foundation-social-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="50.156" cy="56.277" fill="currentColor" rx="19.383" ry="13.568"></svg:ellipse><svg:path fill="currentColor" d="M77.132 38.339c-7.063-4.908-15.964-7.331-24.577-7.779c-10.167-.102-20.041 1.224-29.082 7.514v-19.34h-11.32v35.044c-.129 14.675 9.747 20.961 22.465 25.78q6.932 1.71 15.36 1.709q8.289 0 15.186-1.709c4.597-1.141 8.568-2.973 11.912-4.984q5.016-3.017 7.802-7.061q2.786-4.042 2.786-8.63c1.43-10.439-5.757-17.226-10.532-20.544M53.313 75.017c-12.718.398-27.624-3.441-29.07-18.361c-.804-8.291 7.453-18.73 25.735-19.374c7.517-.265 25.052 3.927 26.249 18.091c.737 8.731-10.196 19.247-22.914 19.644"></svg:path>`,
})
export class FoundationSocialBingIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
