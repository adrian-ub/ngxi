import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWatermelonIcon],svg[openmoji-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#B1CC33" d="M55.226 56.78c-10.988 10.977-28.78 10.977-39.768 0c-10.976-10.987-10.976-28.779 0-39.767l2.654 2.654c-9.525 9.515-9.525 24.945 0 34.46c9.515 9.525 24.945 9.525 34.46 0z"></svg:path><svg:path fill="#EA5A47" stroke="#EA5A47" stroke-linecap="round" d="M52.572 54.127c-9.515 9.525-24.945 9.525-34.46 0c-9.526-9.515-9.526-24.945 0-34.46z"></svg:path><svg:path fill="#EA5A47" d="M49.524 56.718c-9.52 6.837-22.857 5.973-31.412-2.592c-8.62-8.61-9.44-22.063-2.46-31.594"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M55.226 56.78c-10.988 10.977-28.78 10.977-39.768 0c-10.976-10.987-10.976-28.779 0-39.767l2.654 2.654c-9.525 9.515-9.525 24.945 0 34.46c9.515 9.525 24.945 9.525 34.46 0z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m17.516 19.071l36.206 36.206m-4.198 1.441c-9.52 6.837-22.857 5.973-31.412-2.592c-8.62-8.61-9.44-22.063-2.46-31.594"></svg:path><svg:ellipse cx="31.83" cy="46.907" rx="1.687" ry=".844" transform="rotate(-45.001 31.83 46.908)"></svg:ellipse><svg:ellipse cx="44.554" cy="53.269" rx="1.687" ry=".844" transform="rotate(-45.001 44.554 53.27)"></svg:ellipse><svg:ellipse cx="31.83" cy="54.86" rx="1.687" ry=".844" transform="rotate(-45.001 31.83 54.86)"></svg:ellipse><svg:ellipse cx="25.817" cy="40.894" rx="1.687" ry=".844" transform="rotate(-45.001 25.816 40.894)"></svg:ellipse><svg:ellipse cx="19.455" cy="28.17" rx="1.687" ry=".844" transform="rotate(-45.001 19.454 28.17)"></svg:ellipse><svg:ellipse cx="17.864" cy="40.894" rx="1.687" ry=".844" transform="rotate(-45.001 17.864 40.894)"></svg:ellipse><svg:ellipse cx="22.281" cy="50.086" rx="1.687" ry=".844" transform="rotate(-45.001 22.28 50.087)"></svg:ellipse>`,
})
export class OpenmojiWatermelonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
