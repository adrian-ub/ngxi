import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconKubeflowIcon],svg[devicon-kubeflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4279f4" d="m35.59 43.66l2.836 70.645l51.027-65.121a4.72 4.72 0 0 1 3.164-1.774a4.7 4.7 0 0 1 3.48 1.004l31.829 25.547l-10.38-45.395Zm0 0"></svg:path><svg:path fill="#0028aa" d="M40.191 127.262h45.266l-27.793-22.297Zm0 0"></svg:path><svg:path fill="#014bd1" d="M93.902 58.723L63.461 97.566l32.434 26.024l30.77-38.582Zm0 0"></svg:path><svg:path fill="#bedcff" d="m27.055 36.848l.004-.008l26.77-33.57L10.66 24.059L0 70.769Zm0 0"></svg:path><svg:path fill="#6ca1ff" d="m.594 85.105l28.672 35.954l-2.73-68.485Zm0 0"></svg:path><svg:path fill="#a1c3ff" d="M109.215 20.54L67.937.66l-25.69 32.215Zm0 0"></svg:path>`,
})
export class DeviconKubeflowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
