import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalNumpyIcon],svg[devicon-original-numpy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4cabcf" d="M54.32 27.164L33.304 16.559L10.226 28.071l21.594 10.84zm9.641 4.867L86 43.16L63.137 54.637L41.512 43.782zm29.437-15.316l22.645 11.355l-20.254 10.168l-22.082-11.141zm-9.746-4.891L63.265 1.601L43.101 11.667l21.008 10.59zM67.715 99.605v27.816l24.695-12.324l-.023-27.828zm24.66-22.05l-.027-27.535l-24.633 12.246v27.547zm29.645-5.157v27.926l-21.066 10.508l-.016-27.797zm0-9.765V35.266l-21.105 10.492l.016 27.59z" color="#000"></svg:path><svg:path fill="#4c75cf" d="m58.996 62.266l-16.629-8.367v36.14S22.019 46.756 20.14 42.865c-.242-.504-1.242-1.051-1.496-1.188c-3.668-1.914-14.355-7.324-14.355-7.324v63.871l14.785 7.926v-33.4s20.129 38.676 20.336 39.102c.21.422 2.219 4.492 4.383 5.926c2.87 1.906 15.195 9.316 15.195 9.316z" color="#000"></svg:path>`,
})
export class DeviconOriginalNumpyIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
