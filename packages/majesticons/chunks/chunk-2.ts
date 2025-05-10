import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUsbLineIcon],svg[majesticons-usb-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v1m4-1v1m-6 4h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m2 8H9a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4h-1m-4 0v2m0-2h4m0 0v2"></svg:path>`,
})
export class MajesticonsUsbLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserIcon],svg[majesticons-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="8" r="5" fill="currentColor"></svg:circle><svg:path d="M20 21a8 8 0 1 0-16 0"></svg:path><svg:path fill="currentColor" d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class MajesticonsUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserAddIcon],svg[majesticons-user-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 9a6 6 0 1 1 9.642 4.769C14.186 14.907 16 17.208 16 20a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1c0-2.792 1.814-5.093 4.358-6.231A5.99 5.99 0 0 1 2 9zm19 0a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V9z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsUserAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserAddLineIcon],svg[majesticons-user-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 9a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V9zM8 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM2 9a6 6 0 1 1 12 0A6 6 0 0 1 2 9z"></svg:path><svg:path d="M2.124 19h11.752c-.547-2.197-2.86-4-5.876-4c-3.016 0-5.329 1.803-5.876 4zM0 20c0-4.005 3.732-7 8-7s8 2.995 8 7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsUserAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserBoxIcon],svg[majesticons-user-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="10" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 13c-2.761 0-5 1.79-5 4h10c0-2.21-2.239-4-5-4"></svg:path><svg:rect width="18" height="18" x="3" y="3" rx="3"></svg:rect></svg:g>`,
})
export class MajesticonsUserBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserBoxLineIcon],svg[majesticons-user-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="10" r="3"></svg:circle><svg:path d="M17 17c0-2.21-2.239-4-5-4s-5 1.79-5 4"></svg:path><svg:rect width="18" height="18" x="3" y="3" rx="3"></svg:rect></svg:g>`,
})
export class MajesticonsUserBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserCircleIcon],svg[majesticons-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5.2 19.332A9.973 9.973 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.973 9.973 0 0 1-3.2 7.332a7.014 7.014 0 0 0-3.55-4.533a5 5 0 1 0-6.502 0A7.014 7.014 0 0 0 5.2 19.332zm1.81 1.336A9.954 9.954 0 0 0 12 22c1.817 0 3.52-.485 4.99-1.332a5 5 0 0 0-9.98 0zM12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserCircleLineIcon],svg[majesticons-user-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z"></svg:path><svg:path d="M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0z"></svg:path><svg:path d="M12 16a5.003 5.003 0 0 0-4.716 3.333a1 1 0 1 1-1.885-.666a7.002 7.002 0 0 1 13.202 0a1 1 0 1 1-1.885.666A5.002 5.002 0 0 0 12 16z"></svg:path></svg:g>`,
})
export class MajesticonsUserCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserGroupIcon],svg[majesticons-user-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 5a4 4 0 0 0-2.906 6.75a5.998 5.998 0 0 0-2.974 6.449A1 1 0 0 0 7.1 19h9.8a1 1 0 0 0 .98-.801a5.998 5.998 0 0 0-2.974-6.45A4 4 0 0 0 12 5zm4.584 5.779C16.85 10.243 17 9.639 17 9s-.15-1.243-.416-1.779A3 3 0 1 1 21.4 10.8A4 4 0 0 1 23 14v1a1 1 0 0 1-1 1h-3.083a6.006 6.006 0 0 0-3.012-4.25a4.01 4.01 0 0 0 .651-.917a3.56 3.56 0 0 1 .044-.033l-.016-.021zm-8.49.97a4.01 4.01 0 0 1-.65-.916A3.902 3.902 0 0 0 7.4 10.8l.016-.021A3.984 3.984 0 0 1 7 9c0-.639.15-1.243.416-1.779A3 3 0 1 0 2.6 10.8a3.994 3.994 0 0 0-1.372 4.534A1 1 0 0 0 2.17 16h2.912a6.006 6.006 0 0 1 3.011-4.25z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsUserGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserGroupLineIcon],svg[majesticons-user-group-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM8 9a4 4 0 1 1 8 0a4 4 0 0 1-8 0zm11-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM2 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"></svg:path><svg:path d="M17.268 13h3.464a2 2 0 0 0-3.464 0zM15 14a4 4 0 0 1 8 0v1h-7l-1-1zM3.268 13h3.464a2 2 0 0 0-3.464 0zM1 14a4 4 0 0 1 8 0l-1 1H1v-1z"></svg:path><svg:path d="M12 13a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4zm-6 4a6 6 0 1 1 11.88 1.199l-.163.801H6.283l-.163-.801A6.022 6.022 0 0 1 6 17z"></svg:path></svg:g>`,
})
export class MajesticonsUserGroupLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserLineIcon],svg[majesticons-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="8" r="5"></svg:circle><svg:path d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0"></svg:path></svg:g>`,
})
export class MajesticonsUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserRemoveIcon],svg[majesticons-user-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 9a6 6 0 1 1 9.642 4.769C14.186 14.907 16 17.208 16 20a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1c0-2.792 1.814-5.093 4.358-6.231A5.99 5.99 0 0 1 2 9zm15 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsUserRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserRemoveLineIcon],svg[majesticons-user-remove-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6zM8 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM2 9a6 6 0 1 1 12 0A6 6 0 0 1 2 9z"></svg:path><svg:path d="M2.124 19h11.752c-.547-2.197-2.86-4-5.876-4c-3.016 0-5.329 1.803-5.876 4zM0 20c0-4.005 3.732-7 8-7s8 2.995 8 7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsUserRemoveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUsersIcon],svg[majesticons-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9" cy="9" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9 13c-3.866 0-7 2.686-7 6h14c0-3.314-3.134-6-7-6"></svg:path><svg:path d="M15 13a4 4 0 1 0-3-6.646m0 5.411c.897.942 2.193 1.235 3 1.235c3.866 0 7 2.686 7 6h-6"></svg:path></svg:g>`,
})
export class MajesticonsUsersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUsersLineIcon],svg[majesticons-users-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9" cy="9" r="4"></svg:circle><svg:path d="M16 19c0-3.314-3.134-6-7-6s-7 2.686-7 6m13-6a4 4 0 1 0-3-6.646"></svg:path><svg:path d="M22 19c0-3.314-3.134-6-7-6c-.807 0-2.103-.293-3-1.235"></svg:path></svg:g>`,
})
export class MajesticonsUsersLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUxCircleIcon],svg[majesticons-ux-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m13.8-2.6a1 1 0 0 0-1.6 1.2l1.05 1.4l-1.05 1.4a1 1 0 0 0 1.6 1.2l.7-.933l.7.933a1 1 0 0 0 1.6-1.2L16.75 12l1.05-1.4a1 1 0 0 0-1.6-1.2l-.7.933zM8 10a1 1 0 1 0-2 0v2c0 .493.14 1.211.588 1.834C7.074 14.51 7.874 15 9 15s1.926-.492 2.412-1.166c.448-.623.588-1.34.588-1.834v-2a1 1 0 1 0-2 0v2c0 .173-.06.456-.212.666c-.114.159-.314.334-.788.334s-.674-.175-.788-.334A1.24 1.24 0 0 1 8 12z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsUxCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsUxCircleLineIcon],svg[majesticons-ux-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 10v2c0 .667.4 2 2 2s2-1.333 2-2v-2m3 0l1.5 2m1.5 2l-1.5-2m0 0l1.5-2m-1.5 2L14 14"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class MajesticonsUxCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoIcon],svg[majesticons-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.586l2.293 2.293A1 1 0 0 0 22 16V8a1 1 0 0 0-1.707-.707L18 9.586V8a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoCameraIcon],svg[majesticons-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.586l2.44 2.44c.944.945 2.56.275 2.56-1.061V8.207c0-1.336-1.616-2.006-2.56-1.06L17 9.585V8a3 3 0 0 0-3-3H5z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsVideoCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoCameraLineIcon],svg[majesticons-video-camera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 8a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1.586l2.44-2.44c.944-.944 2.56-.275 2.56 1.061v7.586c0 1.336-1.616 2.006-2.56 1.06L17 14.415V16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8zm15.414 4L20 14.586V9.414L17.414 12zM5 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5z"></svg:path></svg:g>`,
})
export class MajesticonsVideoCameraLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoLineIcon],svg[majesticons-video-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zm0 0l4-4v8z"></svg:path>`,
})
export class MajesticonsVideoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoMinusIcon],svg[majesticons-video-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1.586l2.293-2.293A1 1 0 0 1 22 8v8a1 1 0 0 1-1.707.707L18 14.414V16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm5 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsVideoMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoMinusLineIcon],svg[majesticons-video-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zm0 0l4-4v8zm-4 0H7"></svg:path>`,
})
export class MajesticonsVideoMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoPlusIcon],svg[majesticons-video-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1.586l2.293-2.293A1 1 0 0 1 22 8v8a1 1 0 0 1-1.707.707L18 14.414V16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm9 1a1 1 0 1 0-2 0v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsVideoPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoPlusLineIcon],svg[majesticons-video-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zm0 0l4-4v8zm-7-3v3m0 3v-3m0 0h3m-3 0H7"></svg:path>`,
})
export class MajesticonsVideoPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewBoardsIcon],svg[majesticons-view-boards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm14 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7zm-5-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsViewBoardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewBoardsLineIcon],svg[majesticons-view-boards-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5zM2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8z"></svg:path><svg:path d="M9 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsViewBoardsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewColumnsIcon],svg[majesticons-view-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2zm2 14h6V5H9zm8-14v14h2a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsViewColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewColumnsLineIcon],svg[majesticons-view-columns-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4M9 6v12M9 6h6M9 18h6m0 0h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4m0 12V6"></svg:path>`,
})
export class MajesticonsViewColumnsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewGridIcon],svg[majesticons-view-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm2 3a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4H4zm5-8a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2zm2 3a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4h-2zm-2 7a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2zm9-12a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4h-2zm-2 7a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2zm2 3a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4h-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsViewGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewGridLineIcon],svg[majesticons-view-grid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5zM2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8z"></svg:path><svg:path d="M9 5a1 1 0 0 1 1 1v3h4V6a1 1 0 1 1 2 0v3h5a1 1 0 1 1 0 2h-5v2h5a1 1 0 1 1 0 2h-5v3a1 1 0 1 1-2 0v-3h-4v3a1 1 0 1 1-2 0v-3H3a1 1 0 1 1 0-2h5v-2H3a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1zm1 6v2h4v-2h-4z"></svg:path></svg:g>`,
})
export class MajesticonsViewGridLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewListIcon],svg[majesticons-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm1 2a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H5zm5 0a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9zm-5 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H5zm5 0a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2h-9zm-5 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H5zm5 0a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2h-9z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsViewListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewListLineIcon],svg[majesticons-view-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 6a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm6 0a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1zm-6 4a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm6 0a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1zm-6 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm6 0a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1zm-6 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm6 0a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsViewListLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewRowsIcon],svg[majesticons-view-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm0 2v4h20v-4zm20 6H2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsViewRowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewRowsLineIcon],svg[majesticons-view-rows-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6M3 10V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 10h18M3 14h18"></svg:path>`,
})
export class MajesticonsViewRowsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsWatchIcon],svg[majesticons-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M5 12a7 7 0 1 1 14 0a7 7 0 0 1-14 0m8-3a1 1 0 1 0-2 0v3a1 1 0 0 0 .553.894l2 1a1 1 0 1 0 .894-1.788L13 11.382z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6.5V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3.5m6 11V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3.5"></svg:path></svg:g>`,
})
export class MajesticonsWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsWatchLineIcon],svg[majesticons-watch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 9v3l2 1m4-1a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path><svg:path d="M15 6.5V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3.5m6 11V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3.5"></svg:path></svg:g>`,
})
export class MajesticonsWatchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsWifiIcon],svg[majesticons-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5zm6.994 5c-3.202 0-6.122 1.348-8.29 3.569a1 1 0 1 1-1.431-1.397C4.787 5.597 8.21 4 11.994 4c3.783 0 7.207 1.597 9.721 4.172a1 1 0 1 1-1.43 1.397C18.115 7.349 15.196 6 11.995 6zm0 5c-2.023 0-3.883.78-5.335 2.095a1 1 0 1 1-1.342-1.483C7.11 9.99 9.44 9 11.994 9c2.554 0 4.885.99 6.677 2.612a1 1 0 1 1-1.342 1.483C15.877 11.78 14.017 11 11.994 11zm0 5a4.3 4.3 0 0 0-2.511.814a1 1 0 1 1-1.162-1.628A6.3 6.3 0 0 1 11.994 14c1.363 0 2.627.44 3.673 1.186a1 1 0 1 1-1.162 1.628a4.3 4.3 0 0 0-2.51-.814zm-1 3a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsWifiLineIcon],svg[majesticons-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.041 10.643A12.97 12.97 0 0 1 12 6a12.97 12.97 0 0 1 9.959 4.643a1 1 0 1 0 1.53-1.286A14.97 14.97 0 0 0 12 4A14.97 14.97 0 0 0 .51 9.357a1 1 0 0 0 1.531 1.286zM5.573 13.7A8.97 8.97 0 0 1 12 11a8.97 8.97 0 0 1 6.427 2.7a1 1 0 0 0 1.428-1.4A10.97 10.97 0 0 0 12 9a10.97 10.97 0 0 0-7.856 3.3a1 1 0 1 0 1.429 1.4zm3.663 3.133A4.972 4.972 0 0 1 12 16c1.024 0 1.973.307 2.764.833a1 1 0 1 0 1.107-1.666A6.972 6.972 0 0 0 12 14c-1.43 0-2.762.43-3.871 1.167a1 1 0 1 0 1.107 1.666zM12 18a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12z"></svg:path></svg:g>`,
})
export class MajesticonsWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsYenCircleIcon],svg[majesticons-yen-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8.32-5.573a1 1 0 1 0-1.64 1.146L10.08 11H9a1 1 0 1 0 0 2h2v1H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-1h2a1 1 0 1 0 0-2h-1.08l2.4-3.427a1 1 0 0 0-1.64-1.146L12 10.257z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsYenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsYenCircleLineIcon],svg[majesticons-yen-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M8.5 7l3.5 5m0 0l3.5-5M12 12H9m3 0v3m0-3h3m-3 6v-3m0 0h3m-3 0H9"></svg:path>`,
})
export class MajesticonsYenCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsZoomInIcon],svg[majesticons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11zm10-3a1 1 0 1 0-2 0v2H8a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsZoomInLineIcon],svg[majesticons-zoom-in-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 11a7 7 0 1 1 14 0a7 7 0 0 1-14 0zm7-9a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2zm1 6a1 1 0 1 0-2 0v2H8a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V8z"></svg:path></svg:g>`,
})
export class MajesticonsZoomInLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsZoomOutIcon],svg[majesticons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11zm6-1a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsZoomOutLineIcon],svg[majesticons-zoom-out-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 11a7 7 0 1 1 14 0a7 7 0 0 1-14 0zm7-9a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2zm-3 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8z"></svg:path></svg:g>`,
})
export class MajesticonsZoomOutLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
