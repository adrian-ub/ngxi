import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExcitedIcon],svg[tdesign-excited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m6.619-4.862L11 9.04v1.46l-3.2 2.4l-1.2-1.6l1.86-1.394L6.637 8.88zm9.743 1.743L15.54 9.906L17.4 11.3l-1.2 1.6l-3.2-2.4V9.04l3.381-1.902zM12 11.264l.894 1.789c.379.757.857.985 1.189 1.013c.216.018.447-.038.668-.189l.827-.562l1.124 1.654l-.826.562a3.1 3.1 0 0 1-1.167.487a11 11 0 0 1-.671 1.386c-.2.34-.443.697-.728.982c-.26.26-.708.614-1.31.614s-1.05-.355-1.31-.614a5 5 0 0 1-.728-.982a11 11 0 0 1-.672-1.386a3.1 3.1 0 0 1-1.166-.487l-.827-.562l1.125-1.654l.827.562c.221.151.452.207.668.189c.332-.028.81-.256 1.189-1.013zm-.68 4.413c.112.244.236.492.368.716q.173.292.312.462q.14-.17.312-.462a8 8 0 0 0 .367-.716a3.5 3.5 0 0 1-.68-.503a3.5 3.5 0 0 1-.678.503"></svg:path>`,
})
export class TdesignExcitedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
