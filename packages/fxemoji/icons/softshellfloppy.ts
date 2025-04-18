import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiSoftshellfloppyIcon],svg[fxemoji-softshellfloppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#464A4C" d="M469.908 104.371V81.272a7.2 7.2 0 0 1 7.2-7.2h13.098a7.2 7.2 0 0 0 7.2-7.2V51.188c0-19.882-16.118-36-36-36H50.594c-19.882 0-36 16.118-36 36V462c0 19.882 16.118 36 36 36h410.812c19.882 0 36-16.118 36-36V118.771a7.2 7.2 0 0 0-7.2-7.2h-13.098a7.2 7.2 0 0 1-7.2-7.2"></svg:path><svg:path fill="#597B91" d="M322.145 109.133V76.509a5.81 5.81 0 0 1 5.811-5.811h68.304a5.81 5.81 0 0 1 5.811 5.811v32.625a5.81 5.81 0 0 1-5.811 5.811h-68.304a5.81 5.81 0 0 1-5.811-5.812"></svg:path><svg:path fill="#EDEDED" d="M56.225 51.882h305.883v81.879H56.225zm203.772 128.791c-42.999 0-77.856 34.858-77.856 77.856s34.858 77.857 77.856 77.857s77.856-34.858 77.856-77.857s-34.857-77.856-77.856-77.856m22.879 265.319v-51.15c0-11.547-9.361-20.908-20.908-20.908h-3.941c-11.547 0-20.908 9.361-20.908 20.908v51.15c0 11.547 9.361 20.908 20.908 20.908h3.941c11.547 0 20.908-9.361 20.908-20.908"></svg:path><svg:circle cx="259.997" cy="258.529" r="18.643" fill="#464A4C"></svg:circle>`,
})
export class FxemojiSoftshellfloppyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
