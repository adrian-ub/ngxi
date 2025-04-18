import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsDatabaseIcon],svg[aws-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" x="5" y="5" fill="#C925D1"></svg:rect><svg:rect width="72" height="72" x="1" y="1" stroke="#879196" stroke-width="2"></svg:rect><svg:path fill="#FFF" d="M15,21.764 C7.56,21.764 2,19.419 2,17.323 L2,9.777 C4.768,11.811 9.991,12.882 15,12.882 C20.009,12.882 25.232,11.811 28,9.777 L28,17.323 C28,19.419 22.44,21.764 15,21.764 M15,32.455 C7.56,32.455 2,30.11 2,28.014 L2,20.659 C4.768,22.693 9.991,23.764 15,23.764 C20.009,23.764 25.232,22.693 28,20.659 L28,28.014 C28,30.11 22.44,32.455 15,32.455 M15,42 C7.56,42 2,39.656 2,37.559 L2,31.35 C4.768,33.384 9.991,34.455 15,34.455 C20.009,34.455 25.232,33.384 28,31.35 L28,37.559 C28,39.656 22.44,42 15,42 M15,2 C22.44,2 28,4.345 28,6.441 C28,8.537 22.44,10.882 15,10.882 C7.56,10.882 2,8.537 2,6.441 C2,4.345 7.56,2 15,2 M15,0 C7.729,0 0,2.258 0,6.441 L0,37.559 C0,41.743 7.729,44 15,44 C22.271,44 30,41.743 30,37.559 L30,6.441 C30,2.258 22.271,0 15,0" transform="translate(22 15)"></svg:path></svg:g>`,
})
export class AwsDatabaseIcon {
  readonly viewBox = input("0 0 74 74")
  readonly width = input("1em")
  readonly height = input("1em")
}
