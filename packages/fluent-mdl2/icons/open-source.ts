import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OpenSourceIcon],svg[fluent-mdl2-open-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 704q0 58-19 110t-55 94t-83 71t-105 39q-11 57-39 105t-71 83t-94 54t-110 20H832q-32 0-61 10t-53 28t-42 43t-27 56q54 13 99 42t78 71t51 92t19 106q0 66-25 124t-69 102t-102 69t-124 25t-124-25t-102-68t-69-102t-25-125q0-57 19-109t53-93t81-71t103-40V633q-56-11-103-40t-81-70t-53-94t-19-109q0-66 25-124t68-101t102-69T576 0t124 25t101 69t69 102t26 124q0 57-19 109t-53 93t-81 71t-103 40v585q42-32 91-49t101-17h384q32 0 61-10t53-28t42-43t27-56q-54-13-99-42t-78-70t-51-92t-19-107q0-66 25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124M384 320q0 40 15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75m384 1408q0-40-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75m704-832q40 0 75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15"></svg:path>`,
})
export class FluentMdl2OpenSourceIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
